import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  Card,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { TicketIcon } from "@heroicons/react/24/outline";

export function AddTicket() {
  const [open, setOpen] = React.useState(false);
  const [clientName, setClientName] = React.useState("");
  const [saleDate, setSaleDate] = React.useState("");
  const [ticketCount, setTicketCount] = React.useState<number | "">("");
  const [totalAmount, setTotalAmount] = React.useState<number | "">("");
  const [sendReceipt, setSendReceipt] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/* Bouton principal */}
      <Button
        className="flex items-center gap-3"
        size="sm"
        onClick={handleOpen}
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <TicketIcon strokeWidth={2} className="h-4 w-4" />
        Ajouter une vente
      </Button>

      {/* Dialog de création de ticket */}
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: -50 },
          unmount: { scale: 0.95, y: -100 },
        }}
        className="rounded-3xl"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Card
          className="mx-auto w-full rounded-3xl"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {/* Header avec bouton de fermeture */}
          <DialogHeader
            className="bg-primary h-20 flex items-center justify-end px-4 rounded-t-3xl"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Button
              variant="text"
              onClick={handleOpen}
              className="bg-[#16453c] hover:bg-[#16553c] text-white p-1 rounded-full transition duration-200"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </DialogHeader>

          <CardBody
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Input
              label="Nom du client"
              size="lg"
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              crossOrigin={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Input
              label="Date de la vente"
              type="date"
              size="lg"
              value={saleDate}
              onChange={(e) => setSaleDate(e.target.value)}
              crossOrigin={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Input
              label="Nombre de tickets"
              type="number"
              size="lg"
              value={ticketCount}
              onChange={(e) =>
                setTicketCount(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
              crossOrigin={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Input
              label="Montant total"
              type="number"
              size="lg"
              value={totalAmount}
              onChange={(e) =>
                setTotalAmount(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
              crossOrigin={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />

            <div className="-ml-2.5 -mt-1">
              <Checkbox
                label="Envoyer un reçu par email"
                checked={sendReceipt}
                onChange={(e) => setSendReceipt(e.target.checked)}
                crossOrigin={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
          </CardBody>

          {/* Footer avec bouton d'action */}
          <CardFooter
            className="pt-0"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Button
              variant="gradient"
              fullWidth
              onClick={handleOpen}
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Enregistrer la vente
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
