import { Container, FloatingIndicator, Group } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { useState } from "react";
import classes from "./contact.module.css";
import { CircleUserRound, MessageSquareLock, Pen } from "lucide-react";
import AddNewStudent from "../components/AddNewStudent";
import AnonymMessage from "../components/AnonymMessage";
const ContactPage = () => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>("1");
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };
  return (
    <section>
      <Container size="lg">
        <Tabs variant="none"  className={classes.container}  value={value} onChange={setValue}>
          <Tabs.List  ref={setRootRef} className={classes.list}>
            <Tabs.Tab
              value="1"
              ref={setControlRef("1")}
              className={classes.tab}
              rightSection={<Pen />}
            >
              Kursga yozilish
            </Tabs.Tab>
            <Tabs.Tab
              value="2"
              ref={setControlRef("2")}
              className={classes.tab}
              rightSection={<MessageSquareLock />}
            >
             Anonym Xabar
            </Tabs.Tab>

            <FloatingIndicator
              target={value ? controlsRefs[value] : null}
              parent={rootRef}
              className={classes.indicator}
            />
          </Tabs.List>

          <Tabs.Panel value="1">
            <AddNewStudent />
          </Tabs.Panel>
          <Tabs.Panel value="2">
            <AnonymMessage />
          </Tabs.Panel>
        </Tabs>
        <Group pt={15} justify="center">
        <a href="https://t.me/Itparkxiva" className="flex gap-2 items-center">
          Manager bilan bog'lanish<CircleUserRound />
        </a>
      </Group>
      </Container>
    </section>
  );
};

export default ContactPage;
