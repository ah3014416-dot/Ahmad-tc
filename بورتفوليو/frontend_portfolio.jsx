import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-blue-700 font-sans">
      {/* Header */}
      <header className="p-6 shadow-md bg-blue-600 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ahmed • Frontend Developer</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center p-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-600"
        >
          مرحباً! أنا مصمم واجهات أمامية (Frontend)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg max-w-xl text-blue-700"
        >
          متخصص في بناء مواقع تفاعلية وسريعة باستخدام React و Vue وتقنيات الويب الحديثة.
        </motion.p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10 bg-blue-50">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">أعمالي</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((p) => (
            <motion.div 
              key={p}
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-white shadow-lg rounded-xl border border-blue-200"
            >
              <div className="h-40 bg-blue-200 rounded-lg mb-4 animate-pulse"></div>
              <h4 className="text-xl font-semibold mb-2">مشروع رقم {p}</h4>
              <p className="text-blue-700 text-sm">وصف بسيط عن المشروع والتقنيات المستخدمة.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {      {/* Skills */}
      <section id="skills" className="p-14 bg-white">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">مهاراتي</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { name: "HTML", level: "90%" },
            { name: "CSS", level: "90%" },
            { name: "JavaScript", level: "85%" },
            { name: "React", level: "80%" },
            { name: "Vue", level: "75%" },
            { name: "TailwindCSS", level: "85%" },
            { name: "Git / GitHub", level: "80%" },
            { name: "UI / UX", level: "70%" }
          ].map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-5 bg-blue-50 rounded-xl shadow border border-blue-200"
            >
              <h4 className="text-lg font-semibold text-blue-700 mb-2">{skill.name}</h4>
              <div className="w-full bg-blue-200 h-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1 }}
                  className="h-3 bg-blue-600"
                ></motion.div>
              </div>
              <p className="mt-2 text-blue-600 text-sm font-bold">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */} 
      <section id="contact" className="p-14 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-6">تواصل معي</h3>
        <p className="text-blue-600 mb-4">أحتاج فقط رسالة منك لبدء المشروع 🟦</p>
        <a 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          href="ah3014416@gmail.com"
        >
          راسلني
        </a>
      </section>
    </div>
  );
}
