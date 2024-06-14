"use client";

import { Button } from "@/components/ui/button";
import banner from "@/public/banner.jpeg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="  p-4 w-1/2 h-11">
          <Image src={banner} alt="banner" />
        </div>
        <div className=" p-4 w-1/2">
          <Card className="bg-gradient-to-r from-purple-700 to-pink-300">
            <CardHeader>
              <CardTitle className="text-white text-7xl text-center">
                Pikachu
              </CardTitle>
              <CardDescription className="uppercase text-white text-center">
                persale end in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <section className="grid grid-cols-4 gap-4">
                <div className="">
                  <h5>01</h5>
                  <p>Days</p>
                </div>
                <div className="">
                  <h5>13</h5>
                  <p>Hours</p>
                </div>
                <div className="">
                  <h5>50 </h5>
                  <p>Minutes:</p>
                </div>
                <div className="">
                  <h5>18</h5>
                  <p>Second:</p>
                </div>
              </section>
              <div className="w-full bg-white text-black">
                <p>Listing Price:1 $Pikachu = $0.005</p>
              </div>
              <div>
                <p>Your Purchase : 0 PIKACHU</p>
              </div>
              <hr />
              <section>
                <div>
                  <p>1 $PIKACHU = $0.0007</p>
                </div>
                <div>
                  <label htmlFor="">BNB You Pay</label>
                  <Input type="number" placeholder="0.1" />
                  <div className="flex justify-center">
                    <Button className="bg-[#5873ff]">Connect</Button>
                  </div>
                </div>
                <div>
                  <label htmlFor="">You BEP20 Address</label>
                  <Input type="text" placeholder="" />
                  <div className="flex justify-center">
                    <Button className="bg-[#5873ff]">Connect</Button>
                  </div>
                  <p className="text-center">Enjoy 10% of Purchase tokens</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
