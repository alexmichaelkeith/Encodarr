import styles from "./ProfileModal.module.scss";
import { useContext, useEffect } from "react";
import { WebSocketContext } from "../../contexts/webSocketContext";
import InputCheckbox from "../inputCheckbox/InputCheckbox";
import InputSelect from "../inputSelect/InputSelect";
import InputText from "../inputText/InputText";

const ProfileModal = ({
	isOpen,
	setIsOpen,
	header,
	onSave,
	onDelete,
	content,
	setContent,
}: any) => {
	const wsContext = useContext(WebSocketContext);
	const codecs: any = wsContext?.data?.codecs;
	const containers: any = wsContext?.data?.containers;
	const encoders: any = wsContext?.data?.encoders;
	const onClose = () => {
		setIsOpen(false);
	};
	useEffect(() => {
		const modalBackdropClass = "modalBackdrop";

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};
		const handleOutsideClick = (event: any) => {
			if (event.target.classList.value.includes(modalBackdropClass)) {
				setIsOpen(false);
			}
		};
		window.addEventListener("click", handleOutsideClick);
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("click", handleOutsideClick);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [setIsOpen]);

	if (!isOpen) return null;
	return (
		<div className={styles.modal}>
			<div className={styles.header}>
				<div className={styles.left}>{header}</div>
				<div className={styles.right}>
					<div className={styles.cross} onClick={onClose}>
						<div className={styles.verticalCross}></div>
						<div className={styles.horizontalCross}></div>
					</div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.left}>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Name</label>
						<InputText
							type="input"
							selected={content.name}
							onChange={(e: any) =>
								setContent({ ...content, name: e.target.value })
							}
						/>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Wanted Codec </label>
						<InputSelect
							selected={content.codec}
							onChange={(e: any) => {
								setContent({
									...content,
									codec: e.target.value,
									encoder: codecs[e.target.value]?.encoders[0],
									speed:
										encoders[codecs[e.target.value]?.encoders[0]]?.presets[0] ||
										"",
									container: codecs[e.target.value]?.containers[0],
									extension:
										containers[codecs[e.target.value].containers[0]]
											?.extensions[0],
								});
							}}
						>
							{Object.entries(codecs)?.map(([key, value]: any) => (
								<option value={key}>{key}</option>
							))}
						</InputSelect>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Encoder </label>
						<InputSelect
							selected={content.encoder}
							onChange={(e: any) =>
								setContent({
									...content,
									encoder: e.target.value,
									speed: encoders[e.target.value]?.presets[0] || "",
									container: codecs[content?.codec]?.containers[0],
									extension:
										containers[codecs[content?.codec]?.containers[0]]
											?.extensions[0],
								})
							}
						>
							{codecs[content?.codec]?.encoders?.map((encoder: string) => (
								<option value={encoder}>{encoder}</option>
							))}
						</InputSelect>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Encode Speed </label>
						<InputSelect
							selected={content.speed}
							onChange={(e: any) =>
								setContent({ ...content, speed: e.target.value })
							}
						>
							{encoders[content?.encoder]?.presets?.map((preset: any) => (
								<option value={preset}>{preset}</option>
							))}
						</InputSelect>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Output Container </label>
						<InputSelect
							selected={content.container}
							onChange={(e: any) => {
								setContent({
									...content,
									container: e.target.value,
									extension: containers[e.target.value].extensions[0],
								});
							}}
						>
							{codecs[content?.codec]?.containers?.map((container: any) => (
								<option value={container}>{container}</option>
							))}
						</InputSelect>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Output Extension </label>
						<InputSelect
							selected={content.extension}
							onChange={(e: any) =>
								setContent({ ...content, extension: e.target.value })
							}
						>
							{containers[content?.container]?.extensions?.map(
								(extension: any) => (
									<option value={extension}>{extension}</option>
								),
							)}
						</InputSelect>
					</div>
				</div>
				<div className={styles.right}>
					<label>Targets </label>
					<div className={styles.targets}>
						{Object.entries(codecs)?.map(([key, value]: any) => (
							<div
								key={key}
								className={styles.target}
								style={
									!content?.codecs?.includes(key) ? { opacity: "50%" } : {}
								}
								onClick={() => {
									const selectedValues = [...content.codecs];
									if (selectedValues.includes(key)) {
										const index = selectedValues.indexOf(key);
										if (index > -1) {
											selectedValues.splice(index, 1);
										}
									} else {
										selectedValues.push(key);
									}
									setContent({ ...content, codecs: selectedValues });
								}}
							>
								<InputCheckbox
									type="checkbox"
									checked={content?.codecs?.includes(key)}
								/>
								<span className={styles.key}>{key}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.left}>
					<div className={styles.delete} onClick={onDelete}>
						Delete
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.cancel} onClick={onClose}>
						Cancel
					</div>
					<div className={styles.save} onClick={() => onSave()}>
						Save
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProfileModal;
