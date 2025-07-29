export default function Footer() {
  return (
    <footer className="bg-background text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} RedBe-an. All rights reserved.
        </p>
      </div>
    </footer>
  );
}