import type { SVGProps } from "react";
import {
  IconShield,
  IconBadge,
  IconChat,
  IconHandshake,
  IconHome,
  IconUser,
  IconUsers,
  IconBook,
  IconHouseHeart,
  IconAlert,
  IconCompass,
  IconEye,
  IconSeedling,
} from "./Icons";

const MAP: Record<string, (props: SVGProps<SVGSVGElement>) => React.ReactElement> = {
  shield: IconShield,
  badge: IconBadge,
  chat: IconChat,
  handshake: IconHandshake,
  home: IconHome,
  user: IconUser,
  users: IconUsers,
  book: IconBook,
  houseHeart: IconHouseHeart,
  alert: IconAlert,
  compass: IconCompass,
  eye: IconEye,
  seedling: IconSeedling,
};

export function DynamicIcon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: string;
}) {
  const Icon = MAP[name] ?? IconShield;
  return <Icon {...props} />;
}
