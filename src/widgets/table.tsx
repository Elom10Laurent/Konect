import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { AddTicket } from "./addTicket";

const TABS = [
  {
    label: "TOUS",
    value: "tous",
  },
  {
    label: "TICKET",
    value: "ticket",
  },
  {
    label: "TOTAL",
    value: "total",
  },
];

const TABLE_HEAD = ["Date", "Nom Complet", "ticket", "total", "Détails"];

const TABLE_ROWS = [
  {
    date: "23/04/18",
    name: "John Michael",
    ticketCount: 5,
    total: "10,000 OXF",
    detailsLink: "/details/1",
  },
  {
    date: "23/04/18",
    name: "Alexa Liras",
    ticketCount: 3,
    total: "6,000 OXF",
    detailsLink: "/details/2",
  },
  {
    date: "19/09/17",
    name: "Laurent Perrier",
    ticketCount: 7,
    total: "12,500 OXF",
    detailsLink: "/details/3",
  },
  {
    date: "24/12/08",
    name: "Michael Levi",
    ticketCount: 2,
    total: "4,000 OXF",
    detailsLink: "/details/4",
  },
  {
    date: "04/10/21",
    name: "Richard Gran",
    ticketCount: 9,
    total: "18,000 OXF",
    detailsLink: "/details/5",
  },
];

export function MembersTable() {
  return (
    <Card
      className="h-full w-full"
      
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none"
        
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Ventes
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal"
              
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Suivez les informations a propos des ventes
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              variant="outlined"
              size="sm"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              VOIR TOUS
            </Button>
           
            <AddTicket />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader
              
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {TABS.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Rechercher"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody
        className="overflow-scroll px-0"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ date, name, ticketCount, total }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                          placeholder={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {date}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {ticketCount}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {total}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton
                        variant="text"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter
        className="flex items-center justify-between border-t border-blue-gray-50 p-4"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
