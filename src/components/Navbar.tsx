"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState<{
    open: boolean;
    openedOnPath: string;
  }>({ open: false, openedOnPath: "" });
  const showMobileMenu =
    mobileMenu.open && mobileMenu.openedOnPath === pathname;

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Bronceado", href: "/bronceado" },
    { name: "Faciales", href: "/faciales" },
    { name: "Masajes", href: "/masajes" },
    { name: "Experiencias", href: "/experiencias" },
    { name: "Mini Divas", href: "/minidivas" },
    { name: "Corporativo", href: "/corporativo" },
    { name: "Blog", href: "/blog" },
  ];


  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMobileMenu = () => {
    setMobileMenu((m) =>
      !m.open
        ? { open: true, openedOnPath: pathname }
        : { open: false, openedOnPath: m.openedOnPath },
    );
  };

  const closeMobileMenu = () =>
    setMobileMenu((m) => ({ open: false, openedOnPath: m.openedOnPath }));

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-zen-beige/80 backdrop-blur-md shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
          <div className="relative h-14 w-32 shrink-0 overflow-hidden sm:h-16 sm:w-40 md:h-18 md:w-48 lg:h-20 lg:w-56 xl:h-24 xl:w-72">
            <Image
              src="/logo.png"
              alt="Zen Spa Logo"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 288px"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const textColor = isScrolled 
                ? (isActive ? "text-zen-wine font-medium" : "text-zen-wine/70")
                : (isActive ? "text-white font-medium drop-shadow-md" : "text-white/70");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs tracking-[0.2em] uppercase transition-colors hover:text-zen-pink focus:outline-none focus:ring-2 focus:ring-zen-wine rounded-sm relative ${textColor}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute -bottom-2 left-0 right-0 h-px ${
                        isScrolled ? "bg-zen-wine" : "bg-white"
                      }`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="https://wa.me/573156881765"
              target="_blank"
              rel="noopener noreferrer"
              className={`border px-6 py-2.5 text-xs tracking-[0.2em] flex items-center gap-2 uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-zen-wine focus:ring-offset-2 focus:ring-offset-zen-beige rounded-sm ${
                isScrolled 
                  ? "border-zen-wine text-zen-wine hover:bg-zen-wine hover:text-zen-beige"
                  : "border-white/50 text-white hover:bg-white/10 hover:border-white"
              }`}
              aria-label="Reservar cita en WhatsApp"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-zen-wine rounded-sm ${
              isScrolled ? "text-zen-wine" : "text-white"
            }`}
            onClick={toggleMobileMenu}
            aria-expanded={showMobileMenu}
            aria-label="Toggle Menu"
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-zen-beige pt-24 px-6 pb-6 flex flex-col items-center justify-center h-screen md:hidden"
        >
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-3xl font-serif transition-colors focus:outline-none focus:ring-2 focus:ring-zen-wine rounded-sm ${
                  pathname === link.href ? "text-zen-wine italic" : "text-zen-wine/80"
                }`}
                onClick={closeMobileMenu}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/573156881765"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 bg-zen-wine text-zen-beige px-10 py-4 text-xs tracking-[0.2em] uppercase border border-zen-wine hover:bg-transparent hover:text-zen-wine transition-colors focus:outline-none focus:ring-2 focus:ring-zen-wine focus:ring-offset-2 focus:ring-offset-zen-beige rounded-sm"
              onClick={closeMobileMenu}
            >
              Reservar Cita
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
