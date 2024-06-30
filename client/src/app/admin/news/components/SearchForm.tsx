import { Input } from "@/components/ui/input";
import { Button } from "@nextui-org/button";
const SearchForm = () => {
  return (
    <form className="w-1/2 flex gap-2 ml-auto justify-end">
      <Input type="search" placeholder="Yangilik qidirish" autoComplete="off" />
      <Button color="primary" radius="sm">
        Qidirish
      </Button>
    </form>
  );
};

export default SearchForm;
