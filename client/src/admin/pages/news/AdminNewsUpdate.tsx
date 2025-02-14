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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateCard from "../../components/news/CreateCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getNews, updateNews } from "../../api/api.news";
import { useAppSelector } from "../../../hooks/redux";
const AdminNewsUpdate = () => {
  const { admin } = useAppSelector((state) => state.admin);
  const client = useQueryClient();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching, isLoading } = useQuery({
    queryFn: () => getNews(id || ""),
    queryKey: ["news", id],
  });
  const news: INews | null = Array.isArray(data) ? (data[0] as INews) : null;
  const [content, setContent] = useState<string>(news?.content || "");
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (formData: FormData) =>
      updateNews(formData, admin?.token || ""),
    mutationKey: ["news", "create"],
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["news", id] });
      navigate("/admin/news");
    },
  });
  const [newsCard, setNewsCard] = useState<INewsCard>({
    title: news?.news_title || "",
    description: news?.news_description || "",
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
  useEffect(() => {
    if (news) {
      setDate(new Date(news?.created_at).toISOString().split("T")[0]);
      setNewsCard({
        ...newsCard,
        title: news.news_title,
        description: news.news_description,
      });
      setContent(news?.content);
    }
  }, [data]);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
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
    formData.append("id", (news?.id || id) as string);
    formData.append("title", newsCard.title);
    formData.append("description", newsCard.description);
    formData.append("content", content);
    mutateAsync(formData);
  };
  const handleImageUpload = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
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
            Yangilik o'zgartirish bo'limi
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
            disabled={isPending}
            onClick={handleSubmit}
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
        {isLoading || isFetching ? (
          <Text>Loading</Text>
        ) : (
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
        )}
        <CreateCard
          photo={news?.photo_url || ""}
          newsCard={newsCard}
          handleFileChange={handleFileChange}
          handleInputChange={handleInputChange}
        />
      </Group>
    </>
  );
};

export default AdminNewsUpdate;
