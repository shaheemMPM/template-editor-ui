import {
  ReceiptMajor,
  ImageMajor,
  InventoryMajor,
  StoreMajor,
  CustomersMajor,
  ShipmentMajor,
  PaymentsMajor,
  ListMajor,
  ChecklistMajor,
  FooterMajor,
  HeaderMajor,
} from "@shopify/polaris-icons";

export const actionsList = [
  {
    title: "Header",
    prefix: HeaderMajor,
    handle: "header",
  },
  {
    title: "Template",
    prefix: ReceiptMajor,
    handle: "template",
  },
  {
    title: "Branding and Style",
    prefix: ImageMajor,
    handle: "branding",
  },
  {
    title: "Overview",
    prefix: InventoryMajor,
    handle: "overview",
  },
  {
    title: "Supplier",
    prefix: StoreMajor,
    handle: "supplier",
  },
  {
    title: "Client",
    prefix: CustomersMajor,
    handle: "client",
  },
  {
    title: "Shipping",
    prefix: ShipmentMajor,
    handle: "shipping",
  },
  {
    title: "Billing",
    prefix: PaymentsMajor,
    handle: "billing",
  },
  {
    title: "Line items",
    prefix: ChecklistMajor,
    handle: "line-items",
  },
  {
    title: "Total",
    prefix: ListMajor,
    handle: "total",
  },
  {
    title: "Footer",
    prefix: FooterMajor,
    handle: "footer",
  },
];
