import { Clipboard, LaunchProps, showHUD } from "@raycast/api";
import { hash } from "@cbashik/wp-password-hash";

export default async function Command({
  arguments: { password },
}: LaunchProps<{
  arguments: {
    password: string;
  };
}>) {
  const hashedPassword = hash(password);
  await Clipboard.copy(hashedPassword);

  await showHUD(`Password copied to clipboard: ${hashedPassword}`, {
    clearRootSearch: true,
  });
}
