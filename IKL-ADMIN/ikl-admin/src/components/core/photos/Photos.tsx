import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { storage } from "@/firebase";
import "./Photos.css";
import { uploadPhoto, getPhotos, deletePhoto } from "@/components/api/photoApi";

const PhotosComponent = () => {
  const [files, setFiles] = React.useState<File[] | null>(null);
  const [photos, setPhotos] = React.useState<any[]>([]);

  React.useEffect(() => {
    getPhotos().then((res) => {
      setPhotos(res.data.photos);
    });
  }, []);

  const handleForm = async (e: any) => {
    e.preventDefault();
    if (!files) {
      toast.error("Please select a file!");
      return;
    }
    if (files?.length > 0) {
      for (const file of files) {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`photoLibrary/${file.name}`);
        await fileRef.put(file);
        const url = await fileRef.getDownloadURL();
        await uploadPhoto(url, file.name);
      }
    }
    toast.success("Photos uploaded successfully!");
  };

  return (
    <>
      <h1 className="w-1/4 my-5 mx-auto p-10 text-4xl text-center font-bold small:w-full medium:w-3/4 xl:w-1/2 ">
        Add Photo/s
      </h1>
      <div className=" w-1/3 my-5 mx-auto small:w-full medium:w-3/4 xl:w-1/2">
        <form onSubmit={handleForm} className="rounded-md border w-fit mx-auto">
          <div className="p-5 px-5 pb-2 grid max-w-sm items-center gap-1.5 justify-center mx-auto">
            <Label htmlFor="imgLib" className="custom-file-upload">
              Upload Image Library
            </Label>
            <Input
              placeholder="Title"
              type="file"
              id="imgLib"
              className="file-upload-btn2 cursor-pointer"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFiles(Array.from(e.target.files));
                } else {
                  setFiles(null);
                }
              }}
              multiple
            />
          </div>
          <div className="p-2 px-5 text-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
      <h1 className="w-1/4 my-5 mx-auto p-10 text-4xl text-center font-bold small:w-full medium:w-3/4 xl:w-1/2 ">
        Photo Library
      </h1>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo, index) => {
            return (
              <div className="p-4 relative" key={index}>
                <img
                  src={photo.photoUrl}
                  alt=""
                  className="rounded-md border-5 border-black"
                />
                <button
                  className="absolute top-0 right-0 m-1 rounded-full bg-red-500 text-white w-6 h-6 flex items-center justify-center"
                  aria-label="Close"
                    onClick={() => {
                        storage.refFromURL(photo.photoUrl).delete();
                        deletePhoto(photo._id);
                        setPhotos((prev) => {
                        return prev.filter((p) => p.photoUrl !== photo.photoUrl);
                        });
                    }} 
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PhotosComponent;
