//import { StructuredText, Image } from "react-datocms";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue">
       { content }
      </div>
    </div>
  );
}
