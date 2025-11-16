export default function AboutUs() {
  return (
    <div className="min-h-screen px-10 py-16 text-[#fcd9b8] bg-[#17181d]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-[#e09145]">
          About Us
        </h1>

        <p className="text-lg leading-8 mb-8">
          Welcome to <span className="text-[#e09145] font-semibold">Dinotopia</span> — 
          an interactive journey into Earth’s ancient past.
        </p>

        <p className="text-lg leading-8 mb-8">
          Our mission is to bring prehistoric worlds to life through immersive visuals,
          scientific accuracy, and modern web technology. Dinotopia blends education with
          exploration, allowing visitors to learn about dinosaurs and the ever-changing
          Earth in a way that feels alive, engaging, and accessible.
        </p>


        <h2 className="text-3xl font-bold text-[#e09145] mt-10 mb-4">Our Goal</h2>
        <p className="text-lg leading-8 mb-8">
          Our goal is simple:{" "}
          <span className="font-semibold text-[#e09145]">
            to create an online space where curiosity thrives.
          </span>{" "}
          Whether you're a student, a dinosaur enthusiast, or simply fascinated by Earth’s
          history, Dinotopia lets you explore ancient worlds in a way that feels modern,
          intuitive, and inspiring.
        </p>

        <h2 className="text-3xl font-bold text-[#e09145] mt-10 mb-4">Why We Built This</h2>
        <p className="text-lg leading-8 mb-12">
          Dinosaurs dominated our planet for over 150 million years. The Earth beneath us
          has shifted and transformed countless times. These stories deserve to be told
          visually and interactively—capturing the imagination and helping people understand
          our planet’s deep past. Dinotopia exists to make that experience possible.
        </p>
      </div>
    </div>
  );
}
