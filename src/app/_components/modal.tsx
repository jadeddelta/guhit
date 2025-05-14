import { Ref, useEffect, useRef } from 'react';

export default function Modal({ children, autoOpen = false, id }: { children: React.ReactNode; autoOpen?: boolean, id?: string }) {
  const dialogRef: Ref<HTMLDialogElement> = useRef(null);
  
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    
    const handleDialogState = () => {
      document.body.style.overflow = dialog.open ? 'hidden' : '';
    };
  
    if (autoOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    }
    
    dialog.addEventListener('close', handleDialogState);
    
    return () => {
      dialog.removeEventListener('close', handleDialogState);
      document.body.style.overflow = '';
    };
  }, [autoOpen]);
  
  return (
    <dialog ref={dialogRef} className="modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-lg border-2 border-gray-600 bg-slate-900 text-white min-w-[50vw] min-h-[50vh]" id={id}>
        <form>
            <button className="absolute top-2.5 right-2.5 bg-none border-none cursor-pointer" type="submit" formMethod='dialog'>×</button>
            <div className="m-5 text-white text-wrap">
                {children}
            </div>
        </form>
    </dialog>
  );
}