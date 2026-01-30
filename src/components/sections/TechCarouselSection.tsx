import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
    {
        title: "Cidade em Movimento: Tecnologia em Cada Esquina",
        description: "Conectando o presente ao futuro da tecnologia com soluções de alta performance.",
        image: "/images/technology/city-motion.png",
        cta: "Conhecer Soluções",
        link: "/servicos/infraestrutura"
    },
    {
        title: "Datacenters de Última Geração",
        description: "Segurança e estabilidade para garantir que sua empresa nunca pare.",
        image: "/images/technology/datacenter.png",
        cta: "Ver Data Center",
        link: "/servicos/cloud"
    },
    {
        title: "Serviços Digitais Inteligentes",
        description: "Transformamos desafios complexos em resultados exponenciais para o seu negócio.",
        image: "/images/technology/it-services.png",
        cta: "Falar com Especialista",
        link: "/servicos/gerenciados"
    },
];

const TechCarouselSection = () => {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            Tecnologia que Impulsiona
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Explore como a IT Complete transforma o cenário tecnológico da sua empresa com inovação e eficiência.
                        </p>
                    </div>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={index} className="md:basis-full">
                                <div className="relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9]">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
                                        <div className="max-w-2xl space-y-4">
                                            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                                {slide.title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-gray-200">
                                                {slide.description}
                                            </p>
                                            <Link to={slide.link}>
                                                <Button size="lg" variant="outline" className="ctaCarossel">
                                                    {slide.cta}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
                        <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default TechCarouselSection;
