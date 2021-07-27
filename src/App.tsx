import { Page, Card, Layout } from "@shopify/polaris";
import FooterOptions from "./components/Footer/FooterOptions";
import TemplateOptions from "./components/TemplateOptions";
import ActionListMenu from "./components/ActionList/ActionListMenu";
import { useState } from "react";

function App() {
  const [panel, setPanel] = useState(null);
  const openPanel = (panelEl) => {
    console.log("panel opened: ", panelEl.title);
    setPanel(panelEl);
  };

  return (
    <Page fullWidth>
      <div style={{ marginTop: "40px" }}>
        <Layout>
          <Layout.Section secondary>
            {panel ? (
              <TemplateOptions panel={panel} setPanel={setPanel} />
            ) : (
              <Card>
                <ActionListMenu panelHandler={openPanel} />
                <FooterOptions />
              </Card>
            )}
          </Layout.Section>
          <Layout.Section>
            <Card title="Tags" sectioned>
              <p>Add tags to your order.</p>
            </Card>
          </Layout.Section>
        </Layout>
      </div>
    </Page>
  );
}

export default App;
