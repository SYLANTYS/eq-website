import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold mb-4">You're Logged In!</h1>
          <p className="text-gray-300 text-lg tracking-wide">
            Return to the <strong>Pro</strong> tab to <br></br>
            select a theme
          </p>
          <p className="text-gray-400 text-sm tracking-wide">
            <i>Pro accounts unlock all themes</i>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
