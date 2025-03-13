interface HomeState {
    text: string;
    button: string;
}

function UploadImage() {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4">
            <div className="col-span-2">
                <div className="bg-white p-8 rounded shadow-md w-full">
                    <h2 className="text-xl font-bold mb-6">Upload Background Image</h2>
                    <form id="uploadForm" className="space-y-4" aria-labelledby="uploadForm">
                        <div>
                            <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700">Select Image</label>
                            <input type="file" id="fileInput" name="fileInput" accept="image/*" className="mt-4 block w-full text-gray-700 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="flex gap-4 justify-end items-center mt-4">
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Upload</button>
                            <a href="index.html" className="text-gray-700 hover:underline">Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UploadImage;