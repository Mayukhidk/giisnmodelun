import { FileText, BookOpen, FileDown } from 'lucide-react'

export function DownloadCenter() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-4xl font-semibold text-zinc-900 mb-4 tracking-tight">
                    Download Resources
                </h2>
                <p className="text-zinc-600 mb-12 text-base">
                    All essential documents for your preparation and participation — accessible in one place.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Matrix & Allotment */}
                    <a
                        href="https://docs.google.com/spreadsheets/d/1dnpPX3QK6P_IxS13ZFAs-OBjBwv59Q6xlDmFmThVGcE/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-lg border border-zinc-200 bg-white p-6 shadow-md transition hover:shadow-lg"
                    >
                        <div className="flex flex-col items-center space-y-4">
                            <FileText className="h-10 w-10 text-zinc-700 transition group-hover:text-black" />
                            <h3 className="text-lg font-medium text-zinc-900">Matrix & Allotment</h3>
                            <p className="text-sm text-zinc-500 text-center">
                                View delegate positions and committee placements.
                            </p>
                        </div>
                    </a>

                    {/* Brochure */}
                    <a
                        href="/GIISNMUN BROCHURE 2025 (1).pdf"
                        download
                        className="group rounded-lg border border-zinc-200 bg-white p-6 shadow-md transition hover:shadow-lg"
                    >
                        <div className="flex flex-col items-center space-y-4">
                            <BookOpen className="h-10 w-10 text-zinc-700 transition group-hover:text-black" />
                            <h3 className="text-lg font-medium text-zinc-900">Brochure</h3>
                            <p className="text-sm text-zinc-500 text-center">
                                An overview of the event, schedule, and theme.
                            </p>
                        </div>
                    </a>

                    {/* Guide */}
                    <a
                        href="/GIISNMUN Code of Conduct.pdf"
                        download
                        className="group rounded-lg border border-zinc-200 bg-white p-6 shadow-md transition hover:shadow-lg"
                    >
                        <div className="flex flex-col items-center space-y-4">
                            <FileDown className="h-10 w-10 text-zinc-700 transition group-hover:text-black" />
                            <h3 className="text-lg font-medium text-zinc-900">Delegate Guide</h3>
                            <p className="text-sm text-zinc-500 text-center">
                                Everything you need to know to excel as a delegate.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
