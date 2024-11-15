import { Clipboard, LaunchProps, showHUD } from "@raycast/api";
import { hash } from "@cbashik/wp-password-hash";

export default async function Command({
  arguments: { password },
}: LaunchProps<{
  arguments: {
    password: string;
  };
}>) {
  await Clipboard.copy(hash(password));

  await showHUD(`Hashed password copied to clipboard!`, {
    clearRootSearch: true,
  });
}
