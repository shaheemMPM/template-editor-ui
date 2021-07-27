import { Button, Card, Heading, Stack } from "@shopify/polaris";
import { ArrowLeftMinor } from "@shopify/polaris-icons";
import { lazy, Suspense } from "react";

export default function TemplateOptions({ panel, setPanel }) {
  console.log(panel.handle);
  const PanelTemplate = lazy(() => import(`./TemplateOptions/${panel.handle}`));

  return (
    <>
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
      <Card.Section>
        <Suspense fallback={<div>Loading...</div>}>
          <PanelTemplate />
        </Suspense>
      </Card.Section>
    </>
  );
}
