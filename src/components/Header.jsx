import useMainNavigation from '../hooks/useMainNavigation';

export default function Header() {
  const { menuSet, loading, error } = useMainNavigation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!menuSet) return <p>No menu found</p>;

  return (
    <header className="p-4">
      <h1 className="text-2xl font-semibold mb-4">{menuSet.title}</h1>
      <ul className="space-y-2">
        {menuSet.customMenuSets?.menuItems?.map((itemGroup, i) => (
          <li key={i} className="border rounded-lg p-4 shadow">
            {itemGroup.topLevelLink?.nodes?.map((link) => (
              <div key={link.id} className="mb-2">
                <a
                  href={link.customMenuLinks?.subpath || '#'}
                  target={link.customMenuLinks?.openNewTab ? '_blank' : '_self'}
                  className="text-blue-600 hover:underline"
                >
                  {link.title}
                </a>

                {itemGroup.nestedLinks?.nodes?.length > 0 && (
                  <ul className="ml-4 mt-2 space-y-1 list-disc list-inside">
                    {itemGroup.nestedLinks.nodes.map((nested) => (
                      <li key={nested.id}>
                        <a
                          href={nested.customMenuLinks?.subpath || '#'}
                          target={nested.customMenuLinks?.openNewTab ? '_blank' : '_self'}
                          className="text-gray-700 hover:underline"
                        >
                          {nested.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </header>
  );
}