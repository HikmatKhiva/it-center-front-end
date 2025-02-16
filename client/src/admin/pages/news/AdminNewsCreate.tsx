import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import ImageResize from "tiptap-extension-resize-image";
import "@mantine/tiptap/styles.css";
import { ActionIcon, Button, Divider, Group, Text } from "@mantine/core";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateCard from "../../components/news/CreateCard";
import { useMutation } from "@tanstack/react-query";
import { createNews } from "../../api/api.news";
import { useAppSelector } from "../../../hooks/redux";
const AdminNewsCreate = () => {
  const { admin } = useAppSelector((state) => state.admin);
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();
  const { mutateAsync ,isPending} = useMutation({
    mutationFn: (formData: FormData) => createNews(formData, admin?.token || ""),
    mutationKey: ["news", "create"],
    onSuccess: () => {
      navigate("/admin/news");
    },
  });
  const [newsCard, setNewsCard] = useState<INewsCard>({
    title: "",
    description: "",
    image: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewsCard((prevState) => ({
      ...prevState,

      [name]: value,
    }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewsCard((prevState) => ({
      ...prevState,
      image: file,
    }));
  };
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      // Image.configure({ allowBase64: true }),
      ImageResize.configure({ allowBase64: true }), // Use ImageResize here
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });
  const handleSubmit = () => {
    const formData = new FormData();
    if (newsCard.image) {
      formData.append("image", newsCard.image);
    }
    formData.append("title", newsCard.title);
    formData.append("description", newsCard.description);
    formData.append("content", content);
    formData.append("date", date);
    mutateAsync(formData);
  };
  const handleImageUpload = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string); // Convert file to base64 string
      reader.readAsDataURL(file);
    });
  };
  return (
    <>
      <Group align="center" justify="space-between" mb="10">
        <Group align="center">
          <Button
            onClick={() => navigate(-1)}
            color="red"
            variant="outline"
            size="sm"
          >
            <ArrowLeft size={16} />
          </Button>
          <Text size="lg" fw="bold">
            Yangilik Yaratish bo'limi
          </Text>
        </Group>
        <Group>
          <ActionIcon size="lg" variant="default" w={150}>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className=" outline-none p-1 rounded  "
            />
          </ActionIcon>
          <Button
            onClick={handleSubmit}
            loading={isPending}
            disabled={isPending}
            aria-label="save news button"
            color="green"
            size="sm"
            fz={"sm"}
            rightSection={<Save size="16" />}
          >
            Saqlash
          </Button>
        </Group>
      </Group>
      <Divider py={15} />
      <Group wrap="wrap" align="start" justify="center">
        <RichTextEditor
          className="flex-grow"
          w={650}
          autoFocus
          h={600}
          editor={editor}
        >
          <RichTextEditor.Toolbar sticky stickyOffset={60}>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
              <RichTextEditor.Highlight />
              <RichTextEditor.Code />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Control
                onClick={async () => {
                  const fileInput = document.createElement("input");
                  fileInput.type = "file";
                  fileInput.accept = "image/*";
                  fileInput.onchange = async () => {
                    const file = fileInput.files?.[0];
                    if (file) {
                      const imageUrl = (await handleImageUpload(
                        file
                      )) as string;
                      if (editor) {
                        editor
                          .chain()
                          .focus()
                          .setImage({ src: imageUrl })
                          .run();
                      }
                    }
                  };
                  fileInput.click();
                }}
              >
                🖼️
              </RichTextEditor.Control>
            </RichTextEditor.ControlsGroup>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Link />
              <RichTextEditor.Unlink />
            </RichTextEditor.ControlsGroup>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
              <RichTextEditor.H4 />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.AlignLeft />
              <RichTextEditor.AlignCenter />
              <RichTextEditor.AlignJustify />
              <RichTextEditor.AlignRight />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Undo />
              <RichTextEditor.Redo />
            </RichTextEditor.ControlsGroup>
            
          </RichTextEditor.Toolbar>

          <RichTextEditor.Content />
        </RichTextEditor>
        <CreateCard
          photo=""
          newsCard={newsCard}
          handleFileChange={handleFileChange}
          handleInputChange={handleInputChange}
        />
      </Group>
    </>
  );
};
export default AdminNewsCreate;