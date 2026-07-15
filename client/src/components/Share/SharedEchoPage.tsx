import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EchoDetailView from "@/components/EchoDetailView";

import { getSharedEcho } from "@/services/share.service";
import { Echo } from "@/types/echo";

import AppSplash from "@/auth/screens/Splash/AppSplash";

export default function SharedEchoPage() {

  const { token } = useParams();

  const navigate = useNavigate();

  const [echo, setEcho] =
    useState<Echo | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadEcho() {

      try {

        if (!token) return;

        const response =
          await getSharedEcho(token);

        setEcho(response);

      }

      catch (error) {

        console.error(error);

      }

      finally {

        setLoading(false);

      }

    }

    loadEcho();

  }, [token]);

  if (loading) {

    return <AppSplash />;

  }

  if (!echo) {

    return (

      <div className="flex min-h-screen items-center justify-center">

        <div className="text-center">

          <h2 className="text-2xl font-bold">

            Memory not found

          </h2>

          <p className="mt-2 text-gray-500">

            This shared memory may have expired
            or doesn't exist.

          </p>

        </div>

      </div>

    );

  }

  return (

    <EchoDetailView

      echo={echo}

      publicMode

      onBack={() => navigate("/")}

      onEdit={() => {}}

    />

  );

}