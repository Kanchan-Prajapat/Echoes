import { useState } from "react";

import { uploadAvatar } from "@/auth/services/upload.service";

export default function useAvatarUpload() {

  const [uploading, setUploading] =
    useState(false);

  async function upload(
    file: File
  ) {

    try {

      setUploading(true);

      const response =
        await uploadAvatar(file);
      return response.data.url;

    }

    finally {

      setUploading(false);

    }

  }

  return {

    upload,

    uploading,

  };

}