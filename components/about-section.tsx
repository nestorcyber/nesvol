export default function AboutSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto bg-slate-50 rounded-[2.5rem] p-8 md:p-16 shadow-sm">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-tight">
              About My <br />
              <span className="text-blue-600">Journey</span>
            </h2>
            <div className="prose prose-lg text-slate-600 font-medium">
              <p className="mb-6 text-xl leading-relaxed">
                Volunteering is more than just giving time; it's about connection, growth, and making a tangible
                difference. My journey has been defined by a commitment to service and a passion for building stronger
                communities.
              </p>
              <p className="text-xl leading-relaxed">
                Whether it's organizing tech events, mentoring young creatives, or supporting local initiatives, I
                believe in the power of collaboration to drive positive change.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="text-6xl font-black text-blue-600 mb-2">10+</div>
              <div className="text-lg font-bold text-slate-900">Community Events</div>
              <p className="text-slate-500 mt-1">Organized and supported</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="text-6xl font-black text-teal-500 mb-2">100+</div>
              <div className="text-lg font-bold text-slate-900">Hours of Service</div>
              <p className="text-slate-500 mt-1">Dedicated to volunteering</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="text-6xl font-black text-purple-600 mb-2">3</div>
              <div className="text-lg font-bold text-slate-900">Major Initiatives</div>
              <p className="text-slate-500 mt-1">Led and coordinated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
