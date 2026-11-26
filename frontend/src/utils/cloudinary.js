// src/utils/cloudinary.js
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const uploadToCloudinary = async (file, folder = "said-hi") => {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error(
      "Cloudinary is not configured. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET in your frontend .env",
    );
  }

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", folder);

    // --- CHANGED LOGIC HERE ---
    // Use 'raw' for PDFs and other documents so they are delivered byte-for-byte
    const isPdfOrDoc =
      file.type === "application/pdf" ||
      file.type.includes("word") ||
      file.type.includes("zip") ||
      file.type === "text/plain";

    const resourceType = isPdfOrDoc ? "raw" : "auto";

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`,
      { method: "POST", body: formData },
    );

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      console.error("Cloudinary Rejection Reason:", errorBody);
      throw new Error(errorBody?.error?.message || "Upload failed");
    }

    const data = await res.json();

    return {
      secure_url: data.secure_url,
      public_id: data.public_id,
    };
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error(error.message || "File upload failed");
  }
};
