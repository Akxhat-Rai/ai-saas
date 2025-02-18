import { Button } from "@/components/ui/button"; // Adjust this import if needed
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      Landing Page (unprotected) 
      <div>
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
