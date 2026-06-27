import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/shared/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/shared/Section";
import Text from "@/components/ui/Text";

export default function HomePage() {
  return (
    <Section>
      <Container>
        <Badge>⭐⭐⭐⭐⭐ 5.0 Google Rated</Badge>

        <Heading className="mt-6">
          Trusted Surgical Products Supplier
        </Heading>

        <Text className="mt-6 max-w-2xl">
          Delivering quality healthcare products with trust across Maharashtra.
        </Text>

        <div className="mt-8">
          <Button>Request Quote</Button>
        </div>

        <div className="mt-12">
          <Card>
            <p>This is our reusable premium card component.</p>
          </Card>
        </div>
      </Container>
    </Section>
  );
} 