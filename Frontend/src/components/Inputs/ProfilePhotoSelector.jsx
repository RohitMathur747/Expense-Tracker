import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);

      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <LuUser className="text-gray-400 text-3xl" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleImageChange}
            className="hidden"
          />
          <div className="absolute bottom-0 right-0 flex gap-2">
            <button
              type="button"
              onClick={onChooseFile}
              className="mr-4 mb-5 bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600 transition"
              aria-label="Upload profile photo"
            >
              <LuUpload size={18} />
            </button>
            {previewUrl && (
              <button
                type="button"
                onClick={handleRemoveImage}
                className=" mb-5 mr-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                aria-label="Remove profile photo"
              >
                <LuTrash size={18} />
              </button>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-500">Profile Photo</p>
      </div>
    </>
  );
};

export default ProfilePhotoSelector;
