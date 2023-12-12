

/* Create a type for the props that the component will receive */
type ListFilesProps = {
    files: {
        file_name: string;
        file_sha1: string;
        file_size: number;
        file_url: string;
        file_id: string;
        file_similarity: number;
    }[];
};

const ListFiles = (props: ListFilesProps): JSX.Element => {
        const { files } = props;

        return (
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                                            >
                                                Name
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Size
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Similarity
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {files.map((file) => (
                                            <tr key={file.file_sha1}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                                    {file.file_name}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{file.file_size}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{file.file_similarity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        );
}


export default ListFiles;