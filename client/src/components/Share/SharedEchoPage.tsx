import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EchoDetailView from "@/components/EchoDetailView";

import { getSharedEcho } from "@/services/share.service";
import { Echo } from "@/types/echo";

import AppSplash from "@/auth/screens/Splash/AppSplash";
import ErrorState from "../Shared/ErrorState";
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

<ErrorState

    message="This shared memory doesn't exist or has been removed."

/>

  return (

    <EchoDetailView

      echo={echo}

      publicMode

      onBack={() => navigate("/")}

      onEdit={() => {}}

    />

  );

}