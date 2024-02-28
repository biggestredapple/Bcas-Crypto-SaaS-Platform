export interface BlogComponentProps {
  date: string;
  title: string;
  content: string;
  publish: string;
  image: string;
}

export const BlogComponent: React.FC<BlogComponentProps> = ({
  date,
  title,
  content,
  publish,
  image,
}) => {
  return (
    <div className="w-full p-5 h-48 text-white bg-card rounded-r-md border-l-4 border-lightGreen flex items-center justify-between gap-3">
      <div className="flex flex-col gap-3 w-2/3">
        <h6 className="text-sm">{date}</h6>
        <h4 className="text-lg font-bold overflow-hidden max-h-7 min-h-7">{title}</h4>
        <span className="text-sm overflow-hidden max-h-10 min-h-10">{content}</span>
        <h6 className="text-sm">{publish}</h6>
      </div>
      <img src={image} alt="blog" className="object-cover h-full max-w-1/6 w-full" />
    </div>
  );
};
