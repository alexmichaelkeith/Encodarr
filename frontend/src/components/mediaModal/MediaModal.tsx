import styles from "./MediaModal.module.scss";
import { useEffect } from "react";

const MediaModal = ({
	isOpen,
	setIsOpen,
	onSave,
	content,
	setContent,
	type,
}: any) => {
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
				<div className={styles.left}>{type} options</div>
				<div className={styles.right}>
					<div className={styles.cross} onClick={onClose}>
						<div className={styles.verticalCross}></div>
						<div className={styles.horizontalCross}></div>
					</div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.left}>
					{type === "posters" ? (
						<>
							<div className={styles.inputContainer}>
								<label>Poster Size</label>
								<select
									className={styles.select}
									value={content.media_poster_posterSize}
									onChange={(e) => {
										setContent({
											...content,
											media_poster_posterSize: e.target.value,
										});
									}}
								>
									<option value={"small"}>Small</option>
									<option value={"medium"}>Medium</option>
									<option value={"large"}>Large</option>
								</select>
							</div>
							<div className={styles.inputContainer}>
								<label>Detailed Progress Bar</label>
								<input
									type="checkbox"
									checked={Boolean(
										Number(content?.media_poster_detailedProgressBar),
									)}
									onChange={(e) =>
										setContent({
											...content,
											media_poster_detailedProgressBar: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Title</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_poster_showTitle))}
									onChange={(e) =>
										setContent({
											...content,
											media_poster_showTitle: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Monitored</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_poster_showMonitored))}
									onChange={(e) =>
										setContent({
											...content,
											media_poster_showMonitored: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Profile</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_poster_showProfile))}
									onChange={(e) =>
										setContent({
											...content,
											media_poster_showProfile: e.target.checked,
										})
									}
								/>
							</div>
						</>
					) : (
						<></>
					)}
					{type == "table" ? (
						<>
							<div className={styles.inputContainer}>
								<label>Show Network</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_table_showNetwork))}
									onChange={(e) =>
										setContent({
											...content,
											media_table_showNetwork: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Profile</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_table_showProfile))}
									onChange={(e) =>
										setContent({
											...content,
											media_table_showProfile: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Seasons</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_table_showSeasons))}
									onChange={(e) =>
										setContent({
											...content,
											media_table_showSeasons: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Episodes</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_table_showEpisodes))}
									onChange={(e) =>
										setContent({
											...content,
											media_table_showEpisodes: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Episode Count</label>
								<input
									type="checkbox"
									checked={Boolean(
										Number(content?.media_table_showEpisodeCount),
									)}
									onChange={(e) =>
										setContent({
											...content,
											media_table_showEpisodeCount: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Year</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_table_showYear))}
									onChange={(e) =>
										setContent({
											...content,
											media_table_showYear: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Size On Disk</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_table_showSizeOnDisk))}
									onChange={(e) =>
										setContent({
											...content,
											media_table_showSizeOnDisk: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Genre</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_table_showGenre))}
									onChange={(e) =>
										setContent({
											...content,
											media_table_showGenre: e.target.checked,
										})
									}
								/>
							</div>
						</>
					) : (
						<></>
					)}
					{type == "overview" ? (
						<>
							<div className={styles.inputContainer}>
								<label>Poster Size</label>
								<select
									className={styles.select}
									value={content.media_overview_posterSize}
									onChange={(e) => {
										setContent({
											...content,
											media_overview_posterSize: e.target.value,
										});
									}}
								>
									<option value={"small"}>Small</option>
									<option value={"medium"}>Medium</option>
									<option value={"large"}>Large</option>
								</select>
							</div>
							<div className={styles.inputContainer}>
								<label>Detailed Progress Bar</label>
								<input
									type="checkbox"
									checked={Boolean(
										Number(content?.media_overview_detailedProgressBar),
									)}
									onChange={(e) =>
										setContent({
											...content,
											media_overview_detailedProgressBar: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Monitored</label>
								<input
									type="checkbox"
									checked={Boolean(
										Number(content?.media_overview_showMonitored),
									)}
									onChange={(e) =>
										setContent({
											...content,
											media_overview_showMonitored: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Network</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_overview_showNetwork))}
									onChange={(e) =>
										setContent({
											...content,
											media_overview_showNetwork: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Profile</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_overview_showProfile))}
									onChange={(e) =>
										setContent({
											...content,
											media_overview_showProfile: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Season Count</label>
								<input
									type="checkbox"
									checked={Boolean(
										Number(content?.media_overview_showSeasonCount),
									)}
									onChange={(e) =>
										setContent({
											...content,
											media_overview_showSeasonCount: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Path</label>
								<input
									type="checkbox"
									checked={Boolean(Number(content?.media_overview_showPath))}
									onChange={(e) =>
										setContent({
											...content,
											media_overview_showPath: e.target.checked,
										})
									}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>Show Size On Disk</label>
								<input
									type="checkbox"
									checked={Boolean(
										Number(content?.media_overview_showSizeOnDisk),
									)}
									onChange={(e) =>
										setContent({
											...content,
											media_overview_showSizeOnDisk: e.target.checked,
										})
									}
								/>
							</div>
						</>
					) : (
						<></>
					)}
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.left}></div>
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
export default MediaModal;