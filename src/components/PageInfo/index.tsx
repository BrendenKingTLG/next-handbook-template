import React from "react";

interface PageInfoProps {
  content: string[];
}

const PageInfo: React.FC<PageInfoProps> = ({ content }) => {
  return (
    <div className="hidden lg:block overflow-x-auto h-96">
      <table className="table table-pin-rows">
        <thead>
          <tr>
            <th className="text-xl">Page Content</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PageInfo;
