import { NavLink } from 'react-router';
import useMainNavigation from '../hooks/useMainNavigation';

export default function Header() {
    const { menuSet, loading, error } = useMainNavigation();
    const baseUrl = window.location.origin;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!menuSet) return <p>No menu found</p>;

    return (
          <header className="p-4">
      <ul className="space-y-2">
        {menuSet.customMenuSets?.menuItems?.map((itemGroup, i) => (
          <li key={i}>
            {itemGroup.topLevelLink?.nodes?.map((link) => {
              // ✅ define it inside this map, so "link" is in scope
              const topLevelLink = `${baseUrl}${link.customMenuLinks?.subpath || ''}`;
              console.log(topLevelLink)

              return (
                <div key={link.id} className="mb-2">
                  <NavLink
                    to={topLevelLink}
                    target={link.customMenuLinks?.openNewTab ? '_blank' : '_self'}
                    className="text-blue-600 hover:underline"
                  >
                    {link.title}
                  </NavLink>

                  {itemGroup.nestedLinks?.nodes?.length > 0 && (
                    <ul className="ml-4 mt-2 space-y-1 list-inside">
                      {itemGroup.nestedLinks.nodes.map((nested) => {
                        const nestedLink = `${topLevelLink}${nested.customMenuLinks?.subpath || ''}`;

                        return (
                          <li key={nested.id}>
                            <NavLink
                              to={nestedLink}
                              target={nested.customMenuLinks?.openNewTab ? '_blank' : '_self'}
                              className="text-gray-700 hover:underline"
                             >
                              {nested.title}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </li>
        ))}
      </ul>
    </header>
  );
}