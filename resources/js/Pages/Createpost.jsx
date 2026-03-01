import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function CreatePost() {
  const [imgPreview, setImgPreview] = useState("");

  const { post, data, setData, errors, processing , reset} = useForm({
    image: null,
    description: "",
  });

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setData("image", file); // ✅ Set image for submission
      setImgPreview(URL.createObjectURL(file)); // ✅ Show image preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/posts",{
      onSuccess: () => {
        reset(); // Reset the form data
        setImgPreview(""); // Reset the image preview
      },
    }); // ✅ Send form data to Laravel
  };

  return (
    <div className="">
      <h1 className="fs-6">Ajouter une nouvelle publication</h1>
      {imgPreview && <img src={imgPreview} alt="Preview" className="img-preview" />}
      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Image Input */}
        <div className="form-group mb-3">
          <input type="file" className="form-control" onChange={handleImage} />
          {errors.image && <p className="text-danger">{errors.image}</p>}
        </div>

        {/* Description Input */}
        <div className="form-group mb-3">
          <div className="row">
            <div className="col-md-9">
              <textarea
                className="form-control description-area"
                rows={1}
                placeholder="Décrivez votre publication"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
              />
              {errors.description && <p className="text-danger">{errors.description}</p>}
            </div>

            {/* Submit Button */}
            <div className="col-md-3">
              <button type="submit" className="btn btn-dark w-100" disabled={processing}>
                {processing ? "Envoi..." : "Publier"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
