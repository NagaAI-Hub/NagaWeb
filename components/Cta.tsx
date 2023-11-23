"use client";

import { Button } from "./ui/button";
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MessagesSquare } from "lucide-react";

interface CtaProps {
  title: string,
  btnText: string,
  btnLink: string,
}

const Cta: React.FC<CtaProps> = ({title, btnText, btnLink}) => (
  <Card className="bg-gradient-to-r from-zinc-900 to-black rounded-lg shadow-md mx-auto my-4 hover:border-blue-500 transition-colors delay-50">
      <CardContent className="flex items-center justify-between p-6">
        <CardTitle className="text-4xl font-bold tracking-tight lg:text-4xl max-w-xl text-white">
          {title} 
          {/* <span className="font-extrabold text-gray-300">Naga</span> */}
        </CardTitle>
        <div className="flex justify-end">
        <Link href={btnLink}>
          <Button className="bg-white text-gray-600 hover:bg-neutral-900 hover:text-white">
          <MessagesSquare className="mr-2 h-4 w-4" /> {btnText}
          </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
);

export default Cta;
