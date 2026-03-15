import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterSection() {
  const { register, handleSubmit, reset } = useForm<{ email: string }>({
    defaultValues: { email: "" },
  });

  const onSubmit = (data: { email: string }) => {
    // Handle newsletter subscription
    console.log("Newsletter subscription:", data.email);
    reset();
  };

  return (
    <section className="py-16 md:py-20 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The LockIn Letter</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Weekly drops: focus systems, accountability frameworks, behind-the-scenes builds. No fluff. Just signal.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="flex-1"
          />
          <Button type="submit" className="px-6">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}