import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full flex flex-col gap-8 text-center">
          <h1 className="text-4xl font-bold">You are Logged In!</h1>
          <p
            className="text-gray-300 text-lg tracking-wide"
            style={{ wordSpacing: "0.15rem" }}
          >
            Return to the <strong>Pro</strong> tab and <br></br>
            select any theme.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
