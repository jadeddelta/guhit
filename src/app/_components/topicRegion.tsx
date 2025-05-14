import Modal from "./modal";


export default function TopicRegion({ topic, title, id, left }: { topic: string, title: string, id: string, left?: boolean }) {

    const button = () => (
        <button className="text-3xl" onClick={() => {
            const modal = document.getElementById(id) as HTMLDialogElement;
            modal.showModal();
        }}>
            ◉
        </button>
    );

    return (
        <>
            <div className="min-w-[100vw] max-w-[100vw] min-h-[20vh] flex justify-around items-center">
                <div className={"absolute flex flex-row gap-4 justify-center items-center " + (left ? "left-[10vw]" : "right-[10vw]")}>
                    {left && button()}
                    {title}
                    {!left && button()}
                </div>

            </div>
            <Modal id={id}>
                {topic}
            </Modal>
        </>
    );
    // idea: since intromodal should be put on the main element, we wrap with this element
}