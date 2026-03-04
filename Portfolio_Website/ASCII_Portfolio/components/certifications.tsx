interface CertificationsProps {
  data: {
    certifications: Array<{
      title: string
      date: string
      description?: string
      url?: string
    }>
  }
}

export default function Certifications({ data }: CertificationsProps) {
  return (
    <section className="container mx-auto px-4 py-12" id="certifications">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-6 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║ CERTIFICATIONS ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="space-y-3">
          {data.certifications?.map((cert, index) => (
            <div
              key={index}
              className="border border-border bg-card hover:border-accent transition-colors duration-300 p-4 md:p-6"
            >
              <div className="font-mono text-xs md:text-sm">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="text-foreground font-semibold">
                      <span className="text-accent">▸</span> {cert.title}
                    </div>
                    <div className="text-muted-foreground mt-1 text-xs">
                      {cert.date}
                    </div>
                    {cert.description && (
                      <div className="text-muted-foreground mt-2 text-xs">
                        {cert.description}
                      </div>
                    )}
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-foreground transition-colors text-xs border border-border px-2 py-1 hover:bg-accent/10 whitespace-nowrap"
                    >
                      [view]
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
