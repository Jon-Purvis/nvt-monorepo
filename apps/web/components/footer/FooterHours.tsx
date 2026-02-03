import { siteConfig } from "@/lib/site-config";

export default function FooterHours() {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-foreground mb-4">Hours</h3>
      <div className="inline-block text-left">
        <table className="text-muted-foreground">
          <tbody>
            {siteConfig.hours.map((item) => (
              <tr key={item.days}>
                <td className="text-foreground pr-4 py-1">{item.days}</td>
                <td className="py-1">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
