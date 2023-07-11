import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { EditorState } from 'draft-js';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';

import { IProduct } from '../../../interfaces/Product';
import { useAppSelector } from '../../../store/Store';

export default function EditDescriptionCard(props: IProduct ) {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const config = useAppSelector((state) => state.configuration);

	return (
		<div className={`${config?.hasUserSection ? "col-span-2" : "col-span-3"} border-2 rounded-lg`}>
			<div className="flex flex-col">
				<img src={props.picture} alt="product image" className="object-cover w-full h-80" />
				<div className="flex flex-col gap-2 p-4">
					<h4 className="text-lg font-semibold" style={{ color: config?.mainColor }}>
						{props.name}
					</h4>
					<Editor
						editorState={editorState}
						onEditorStateChange={(e) => setEditorState(e)}
						editorClassName="bg-white h-full !min-h-[10rem] !max-h-[20rem] overflow-auto"
					/>
				</div>
			</div>
		</div>
	);
}
