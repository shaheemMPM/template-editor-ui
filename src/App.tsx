import { Page, Card, Layout } from "@shopify/polaris";
import FooterOptions from "./components/Footer/FooterOptions";
import TemplateOptions from "./components/TemplateOptions";
import ActionListMenu from "./components/ActionList/ActionListMenu";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";

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
            <Card>
              <CSSTransition in={!!panel} timeout={300} classNames="slide">
                <div>
                  {panel && (
                    <TemplateOptions panel={panel} setPanel={setPanel} />
                  )}
                </div>
              </CSSTransition>
              {!panel && (
                <>
                  <ActionListMenu panelHandler={openPanel} />
                  <FooterOptions />
                </>
              )}
            </Card>
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
