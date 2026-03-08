"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home")
    const [isScrolled, setIsScrolled] = useState(false)

    const sections = [
        { id: "home", label: "HOME" },
        { id: "about", label: "ABOUT" },
        { id: "experience", label: "EXP" },
        { id: "projects", label: "PROJECTS" },
        { id: "skills", label: "SKILLS" },
        { id: "contact", label: "CONTACT" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Determine active section based on scroll position
            const scrollPosition = window.scrollY + 100 // Offset for navbar height

            const curSection = sections.findLast((section) => {
                const element = document.getElementById(section.id)
                if (element) {
                    return element.offsetTop <= scrollPosition
                }
                return false
            })

            if (curSection) {
                setActiveSection(curSection.id)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-sm border-b border-border py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <div
                    className="font-mono text-primary font-bold cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    {">_ SK"}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`font-mono text-sm transition-colors relative ${activeSection === section.id
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {activeSection === section.id && (
                                <span className="absolute -left-3 text-primary animate-pulse">{">"}</span>
                            )}
                            {section.label}
                        </button>
                    ))}
                </div>

                {/* Offset for Theme Selector */}
                <div className="w-16"></div>
            </div>
        </nav>
    )
}
