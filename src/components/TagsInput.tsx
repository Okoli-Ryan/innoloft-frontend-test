import { Input, InputRef, Space, Tag, Tooltip } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export default function TagsInput({ initialValue }: ITagInput) {
	const [tags, setTags] = useState(initialValue);
	const [inputVisible, setInputVisible] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef<InputRef>(null);
	const editInputRef = useRef<InputRef>(null);

	useEffect(() => {
		if (inputVisible) {
			inputRef.current?.focus();
		}
	}, [inputVisible]);

	useEffect(() => {
		editInputRef.current?.focus();
	}, [inputValue]);

	const handleClose = (removedTag: string) => {
		const newTags = tags.filter((tag) => tag !== removedTag);
		setTags(newTags);
	};

	const showInput = () => {
		setInputVisible(true);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleInputConfirm = () => {
		const newTags = [...tags, inputValue];
		if (inputValue && tags.indexOf(inputValue) === -1) {
			setTags(newTags);
		}
		setInputVisible(false);
		setInputValue("");
	};

	return (
		<Space size={[0, 8]} wrap>
			<Space size={[0, 8]} wrap>
				{tags.map((tag) => {
					const isLongTag = tag.length > 20;
					const tagElem = (
						<Tag key={tag} closable style={{ userSelect: "none" }} onClose={() => handleClose(tag)} className="flex items-center pill">
							<span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
						</Tag>
					);
					return isLongTag ? (
						<Tooltip title={tag} key={tag}>
							{tagElem}
						</Tooltip>
					) : (
						tagElem
					);
				})}
				{inputVisible ? (
					<Input
						ref={inputRef}
						type="text"
						size="small"
						value={inputValue}
						onChange={handleInputChange}
						onBlur={handleInputConfirm}
						onPressEnter={handleInputConfirm}
					/>
				) : (
					<Tag onClick={showInput} className="flex gap-2 items-center pill">
						<AiOutlinePlus /> New Tag
					</Tag>
				)}
			</Space>
		</Space>
	);
}

interface ITagInput {
	initialValue: string[];
}
