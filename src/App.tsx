import { Page, Card, Layout } from "@shopify/polaris";
import FooterOptions from "./components/FooterOptions";
// import InnerOptions from "./components/InnerOptions";
import TemplateOptions from "./components/TemplateOptions";

function App() {
  return (
    <Page fullWidth>
      <div style={{ marginTop: "40px" }}>
        <Layout>
          <Layout.Section secondary>
            <Card>
              {/* <InnerOptions /> */}
              <TemplateOptions />
              <FooterOptions />
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
