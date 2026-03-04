interface HeroProps {
  data: {
    name: string
    occupation: string
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative">
      <div className="flex flex-col items-center justify-center gap-8">
        {/* ASCII Art Banner */}
        <div className="font-mono text-xs md:text-sm leading-tight text-foreground">
          <pre className="text-center">{`███████╗██╗██████╗ ██╗  ██╗ █████╗ ██████╗ ████████╗██╗  ██╗
██╔════╝██║██╔══██╗██║  ██║██╔══██╗██╔══██╗╚══██╔══╝██║  ██║
███████╗██║██║  ██║███████║███████║██████╔╝   ██║   ███████║
╚════██║██║██║  ██║██╔══██║██╔══██║██╔══██╗   ██║   ██╔══██║
███████║██║██████╔╝██║  ██║██║  ██║██║  ██║   ██║   ██║  ██║
╚══════╝╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝

██╗  ██╗ █████╗ ███╗   ███╗ █████╗ ████████╗██╗  ██╗
██║ ██╔╝██╔══██╗████╗ ████║██╔══██╗╚══██╔══╝██║  ██║
█████╔╝ ███████║██╔████╔██║███████║   ██║   ███████║
██╔═██╗ ██╔══██║██║╚██╔╝██║██╔══██║   ██║   ██╔══██║
██║  ██╗██║  ██║██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝`}</pre>
        </div>

        {/* Name */}
        <div className="text-center space-y-6 w-full">
          <h1 className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-widest">
            {data.name}
          </h1>

          {/* Decorative line */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl border-t-2 border-foreground"></div>
          </div>

          {/* Occupation */}
          <div className="font-mono text-base md:text-lg text-foreground">
            <span className="text-accent">{">"}</span> {data.occupation}
          </div>

          {/* Decorative line */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl border-b-2 border-foreground"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
