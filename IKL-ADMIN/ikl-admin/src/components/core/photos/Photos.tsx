import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { storage } from "@/firebase";
import './Photos.css'
import { uploadPhoto } from "@/components/api/photoApi";

const PhotosComponent = () => {

    const [files, setFiles] = React.useState<File[] | null>(null);

    const handleForm = async (e: any) => {
        e.preventDefault();
        if(files?.length > 0){
            for(const file of files){
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
    </>
  );
};

export default PhotosComponent;
