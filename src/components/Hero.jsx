import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    return (
        <div className="bg-[#2D142C] text-white min-h-screen p-6 font-press">
            <nav className="bg-[#62033B] p-4 rounded-t-2xl shadow-md">
                <h1 className="text-[#EE4540] text-2xl">LAHDAR BELLUMI</h1>
            </nav>

            <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-10">
                <div className="flex flex-col items-center">
                    <div className="border-4 border-[#EE4540] rounded-full overflow-hidden w-48 h-48">
                        <img
                            src="/profile.jpg"
                            alt="Lahdar Bellumi"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <h2 className="text-[#EE4540] text-xl mt-4">LAHDAR BELLUMI</h2>
                    <div className="w-36 h-1 bg-[#EE4540] my-2" />
                    <p className="text-[#EE4540] mb-4">Programmer | Backend Developer</p>
                    <Button className="bg-[#EE4540] hover:bg-[#C72C41] text-white rounded-md text-sm px-4 py-2">
                        ⬇ DOWNLOAD
                    </Button>
                </div>

                <div className="max-w-xl text-left font-mono">
                    <h3 className="text-[#EE4540] text-lg mb-2">TENTANG SAYA</h3>
                    <div className="w-32 h-1 bg-[#EE4540] mb-3" />
                    <p className="text-sm leading-relaxed">
                        Saya adalah seorang yang teliti dan memiliki rasa penasaran yang tinggi.
                        Saya memiliki minat pada bidang programming terutama pada bagian backend,
                        saya juga memiliki minat terhadap IoT. Saya dapat bekerja secara tim maupun
                        secara individu. Saya juga dapat beradaptasi dengan hal baru sehingga saya dapat diandalkan.
                    </p>
                    <div className="mt-4">
                        <h4 className="text-[#EE4540]">KONTAK →</h4>
                        <div className="flex gap-4 mt-2 text-[#EE4540]">
                            <Github />
                            <Linkedin />
                            <Instagram />
                            <Mail />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 bg-[#62033B] p-4 rounded-b-2xl flex justify-center gap-8 text-sm">
                <Button variant="outline" className="border-[#EE4540] text-white px-6 rounded-2xl">
                    <span className="mr-2">🔒</span> SKILL
                </Button>
                <Button variant="outline" className="border-[#EE4540] text-white px-6 rounded-2xl">
                    <span className="mr-2">💼</span> PENGALAMAN KERJA
                </Button>
                <Button variant="outline" className="border-[#EE4540] text-white px-6 rounded-2xl">
                    <span className="mr-2">📁</span> PORTOFOLIO
                </Button>
            </div>
        </div>
    );
}
