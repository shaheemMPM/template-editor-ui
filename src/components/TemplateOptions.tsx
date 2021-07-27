import { Button, Card, Heading, Stack } from "@shopify/polaris";
import { ArrowLeftMinor } from "@shopify/polaris-icons";

export default function TemplateOptions({ panel, setPanel }) {
  return (
    <Card>
      <Card.Section>
        <Stack alignment="center">
          <Button
            icon={ArrowLeftMinor}
            outline
            onClick={() => {
              setPanel(null);
            }}
          />
          <Heading>{panel.title}</Heading>
        </Stack>
      </Card.Section>
    </Card>
  );
}
